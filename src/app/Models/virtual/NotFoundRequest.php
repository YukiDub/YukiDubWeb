<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

/**
 * @OA\Schema(
 *     type="object",
 *     title="UnprocessableEntityRequest",
 *     description="UnprocessableEntityRequest",
 * )
 */
class NotFoundRequest
{
    /**
     * @OA\Property(
     *     title="status",
     *     description="status code",
     *     format="integer",
     *     example=404
     * )
     *
     * @var int
     */
    public $status;

    /**
     * @OA\Property(
     *     title="message",
     *     description="The message error",
     *     format="string",
     *     example="Not found."
     * )
     *
     * @var string
     */
    public $message;
}
