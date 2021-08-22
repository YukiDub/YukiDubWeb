<?php
/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 14.8.2021
 */

namespace App\Support;

use Illuminate\Routing\ResponseFactory;
use Illuminate\Http\Resources\Json\ResourceCollection as Collection;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class Response
{
    /**
     * Http response
     *
     * @var \Illuminate\Contracts\Routing\ResponseFactory
     */
    private $response;

    /**
     * Collection
     *
     */
    private $resource;

    /**
     * Http status code
     *
     * @var int
     */
    private $statusCode = HttpResponse::HTTP_OK;

    /**
     * Create a new class instance.
     *
     * @param ResponseFactory $response
     */
    public function __construct(ResponseFactory $response, $collection)
    {
        $this->resource = $collection;
        $this->response = $response;
    }

    /**
     * @param array|Collection $data
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function json($data = [], array $headers = []): \Illuminate\Http\JsonResponse
    {
        return $this->response->json(['data'=>$data], $this->statusCode, $headers);
    }

    /**
     * return collection.
     */
    public function withCollection($data): Collection
    {
        return ($this->resource::collection($data));
    }

    /**
     * Return a 201 response with the given created resource.
     *
     * @param null $resource
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function withCreated($resource = null): \Illuminate\Http\JsonResponse
    {
        $this->statusCode = HttpResponse::HTTP_CREATED;

        if (is_null($resource)) {
            return $this->json();
        }
        return $this->json($resource);
    }

    /**
     * Make a 204 no content response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function withNoContent(): \Illuminate\Http\JsonResponse
    {
        return $this->setStatusCode(
            HttpResponse::HTTP_NO_CONTENT
        )->json();
    }

    /**
     * Make a 400 'Bad Request' response.
     *
     * @param string $message
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function withBadRequest($message = 'Bad Request'): \Illuminate\Http\JsonResponse
    {
        return $this->setStatusCode(
            HttpResponse::HTTP_BAD_REQUEST
        )->withError($message);
    }

    /**
     * Make a 403 'Forbidden' response.
     *
     * @param string $message
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function withForbidden($message = 'Forbidden')
    {
        return $this->setStatusCode(
            HttpResponse::HTTP_FORBIDDEN
        )->withError($message);
    }

    /**
     * Make a 404 'Not Found' response.
     *
     * @param string $message
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function withNotFound($message = 'Not Found'): \Illuminate\Http\JsonResponse
    {
        return $this->setStatusCode(
            HttpResponse::HTTP_NOT_FOUND
        )->withError($message);
    }

    /**
     * Make a JSON response with the transformed items.
     *
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function withItem($data): \Illuminate\Http\JsonResponse
    {
        return $this->json(new $this->resource($data));
    }

    /**
     * Make an error response.
     *
     * @param $message
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function withError($message): \Illuminate\Http\JsonResponse
    {
        return $this->json([
            'messages' => is_array($message) ? $message : [$message]
        ]);
    }

    /**
     * Get status code
     *
     * @return int
     */
    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    /**
     * Set status code
     *
     * @param int $statusCode
     * @return Response
     */
    public function setStatusCode(int $statusCode): Response
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    /** Set collection class
     * @param mixed $resource
     */
    public function setResource($resource): Response
    {
        $this->resource = $resource;
        return $this;
    }
}