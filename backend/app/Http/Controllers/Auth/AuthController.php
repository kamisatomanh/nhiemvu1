<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        /** @var JWTGuard $guard */
        $guard = auth();

        if (!$token = $guard->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = $guard->getProvider()->retrieveByCredentials($credentials);
        $customClaims = [
            'name' => $user->name,
            'email' => $user->email,
            'id' => $user->id,
            'role' => $user->role,
        ];
        $token = $guard->claims($customClaims)->attempt($credentials);
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'id' => $user->id,
            'role' => $user->role,
        ];


        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        /** @var JWTGuard $guard */
        $guard = auth();

        return response()->json([
            'access_token' => $token,
            'user' => $guard->user(),
            'token_type'   => 'bearer',
            'expires_in'   => $guard->factory()->getTTL() * 60
        ]);
    }

    public function logout()
    {
        /** @var JWTGuard $guard */
        $guard = auth();
        $guard->logout(); // Hủy token hiện tại

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function refresh()
    {
        /** @var JWTGuard $guard */
        $guard = auth();
        return $this->respondWithToken($guard->refresh());
    }

    public function profile()
    {
        /** @var JWTGuard $guard */
        $guard = auth();
        return response()->json($guard->user());
    }

    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'confirm_password' => 'required|string|min:6|same:password',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        /** @var JWTGuard $guard */
        $guard = auth();
        $customClaims = [
            'name' => $user->name,
            'email' => $user->email,
            'id' => $user->id,
            'role' => $user->role,
        ];
        $token = $guard->claims($customClaims)->login($user);

        return $this->respondWithToken($token);
    }
}
