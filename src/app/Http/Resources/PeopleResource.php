<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PeopleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if($this->avatarExtention){
            $images = [
                "original"=> "/storage/images/peoples/" . $this->staff_id . "_original." . $this->avatarExtention,
                "preview"=> "/storage/images/peoples/" . $this->staff_id . "_preview." . $this->avatarExtention,
            ];
        }
        else{
            $images = [
                "original"=> "/storage/images/peoples/default_original.png",
                "preview"=> "/storage/images/peoples/default_preview.png",
            ];
        }

        return [
          "staff_id"=>$this->staff_id,
          "nameJp"=>$this->nameJp,
          "nameEn"=>$this->nameEn,
          "nameRu"=>$this->nameRu,
          "birthday"=>$this->birthday,
          "webSite"=>$this->webSite,
          "works"=>[ //пока просто заглушка для примера
              [
                  "id"=>9,
                  "posterUrl"=>[
                      "original"=> "/storage/images/anime/default_original.png",
                      "preview"=> "/storage/images/anime/default_preview.png",
                  ],
                  "type"=>"TV Series",
                  "episodes"=>12, //поправить в бд
                  "episodesReleased"=>12,
                  "episodeDuration"=>"23 minutes",
                  "status"=>"released",
                  "startDate"=>"Jul 7, 2015",
                  "releaseDate"=>"Sep 22, 2015",
                  "genres"=>[
                      [
                          "id"=>4,
                          "name"=>"comedy"
                      ],
                      [
                          "id"=>3,
                          "name"=>"School"
                      ],
                      [
                          "id"=>7,
                          "name"=>"Seinen"
                      ],
                      [
                          "id"=>14,
                          "name"=>"Slice of Life"
                      ]
                  ],
                  "ageRating"=>"PG-13",
                  "nameJp"=>"のんのんびより りぴーと",
                  "nameEn"=>"Non Non Biyori Repeat",
                  "nameRu"=>"Деревенская глубинка 2",
                  "descriptionJp"=>null,
                  "descriptionEn"=>"Far from the hustle and bustle of urban life, and with only a single candy store and bus route to its name, the rural Asahigaoka is certainly not a place for everyone. Nevertheless, the village's children still manage to cheerfully spend their days exploring and having fun in the wilderness around them. One such child, Renge Miyauchi, the youngest of the group, looks forward to the entrance ceremony of the upcoming school year, signalling her entry into first grade and the beginning of her elementary school life. Attending the only school in town, Renge and her friends, seventh grader Natsumi Koshigaya and her eighth grade sister Komari, make the most out of their rural lifestyle, playing and studying everyday. Meanwhile, fifth grader Hotaru Ichijou has just moved to Asahigaoka from Tokyo, unaware of the numerous adventures and memories that await her.",
                  "descriptionRu"=>"Время идёт, а ученики маленькой школы Асахигаока, расположенной в одной из глубинок Японии, по-прежнему наслаждаются безмятежными буднями. Купаясь в лучах летнего солнца, скрываясь от жары среди тенистых аллей, ребята шумят и дурачатся. А на смену старым играм и занятиям приходят новые, будь то наблюдение за цветущей вишней, гонки наперегонки — непременно босиком — по обмелевшему руслу реки, выкапывание картофеля или строительство зимнего жилища эскимосов — иглу. Ведь нет ничего лучше приятной повседневности, где минуты складываются в часы незабываемого времяпрепровождения, плечом к плечу с искренними друзьями. И вот, когда кажется, будто история остановилась на месте, нужно просто внимательно приглядеться, и не заметишь, как уже нашёл отдых для души. Души, умиротворённой приятной и трогательной обыденностью деревенской глубинки.",
              ],
          ],
          "roles"=>$this->roles,
          "image"=>$images,
          "person_favoured"=>false,
          "topic_id"=>"не реализовано"
        ];
    }
}
