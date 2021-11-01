<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\api\v1\ApiController;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use App\Services\AuthServices\AuthService;
use Illuminate\Http\Request;

class RegisterController extends ApiController
{

    protected $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
        parent::__construct();
    }

    /**
     * New user registration
     * @param RegistrationRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\JsonResponse
     *
     * @OA\Post (
     *     path="/auth/register",
     *     tags = {"Auth"},
     *
     *     @OA\Response(
     *         response="200",
     *         description="....",
     *         @OA\MediaType(mediaType="application/json")
     *     ),
     *     @OA\Parameter(
     *          name = "name",
     *          in = "query",
     *          description = "name",
     *          required=false,
     *          @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *    @OA\Parameter(
     *          name = "email",
     *          in = "query",
     *          description = "email",
     *          required=false,
     *          @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *    @OA\Parameter(
     *          name = "password",
     *          in = "query",
     *          description = "password",
     *          required=false,
     *          @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *    @OA\Parameter(
     *          name = "password_confirmation",
     *          in = "query",
     *          description = "password confirmation",
     *          required=false,
     *          @OA\Schema(
     *             type="string"
     *         )
     *     )
     * )
     */
    public function register(Request $request)
    {
        return view('Auth/Registration/registration');
    }

    public function callBack(RegistrationRequest $request)
    {
        $user = User::create([
            'name'=>$request->get('name'),
            'email'=>$request->get('email'),
            'password'=>bcrypt($request->get('password'))
        ]);

        return view('Auth/Registration/success');
    }
}
