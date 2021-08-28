<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 22.8.2021
 */

namespace App\Services;

use App\Exceptions\ImageException;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImagesService
{
    protected $disk = 'public';
    protected $previews = [];

    public function upload($image, $name, $path){
        $extension = $image->getClientOriginalExtension();
        if(!$origImage = Storage::disk($this->disk)->putFileAs($path . '/original', $image, $name . '.'. $extension)){
            throw new ImageException('there was an error loading the image');
        }

        $images = [
            'original'=>$path . $name . '.'. $extension,
        ];

        if(!empty($this->previews)){
            foreach ($this->previews as $previewName=>$preview){
                $makeImage = Image::make($image->getRealPath());
                $size = explode('x', $preview);
                $makeImage = $makeImage->resize($size[0], $size[1]);

                $imagePath =  $path . '/' . $previewName . '/' . $name . '.' . $extension;
                Storage::disk($this->disk)->put($imagePath, $makeImage->save()->__toString());

                $images[$previewName] = $imagePath;
            }
        }

        return $images;
    }

    public function remoteUpload($path, $to){
        $imagePath = explode('/', $path);
        $imageName = end($imagePath);
        $imageName = explode('?', $imageName)[0];

        return \Storage::disk($this->disk)->putFileAs($to, $path, $imageName);
    }

    public function remove(...$path){
        foreach ($path as $item){
            if (!empty($item)){
                Storage::disk($this->disk)->delete($item);
            }
        }
    }

    /**
     * @return string
     */
    public function getDisk(): string
    {
        return $this->disk;
    }

    /**
     * @param string $disk
     * @return $this
     */
    public function setDisk(string $disk): ImagesService
    {
        $this->disk = $disk;
        return $this;
    }

    /**
     * @param array $previews
     * @return $this
     */
    public function setPreviews(array $previews): ImagesService
    {
        $this->previews = $previews;
        return $this;
    }

}