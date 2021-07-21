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
class UnprocessableEntityRequest
{
    /**
     * @OA\Property(
     *     title="message",
     *     description="The message error",
     *     format="string",
     *     example="The given data was invalid."
     * )
     *
     * @var string
     */
    public $message;

    /**
     * @OA\Property(
     *     title="errors list",
     *     description="The errors list",
     *     format="array",
     *     @OA\Property(
     *          title="nameJp",
     *          description="The message error",
     *          format="string",
     *          example="The name jp field is required."
     *      )
     * )
     *
     * @var string
     */
    public $errors;
}
