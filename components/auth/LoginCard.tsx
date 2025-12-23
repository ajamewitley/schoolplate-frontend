"use client";

import { Card, Checkbox, Label, TextInput, HRText } from "flowbite-react";
import { Button } from "../ui/button";
import { FaGoogle, FaFacebook, FaPhone, FaLock } from "react-icons/fa";

import Link from "next/link";

const LoginCard = () => {
    return (
        <div className="gap-4 flex-col flex">
            <Card className="bg-card">
                <h1 className="text-center text-2xl font-black">Login to your account</h1>
                <Button variant="amber" className="cursor-pointer bg-accent shadow-soft"><FaGoogle color="blue" className=" rotate-10 text-3xl" /> Login with Google</Button>
                <Button className="cursor-pointer border-secondary bg-blue-500 hover:bg-blue-500"><FaFacebook />Login with Facebook</Button>
                <HRText text="OR" />
                <form className="flex flex-col gap-4">
                    <div>
                        <TextInput id="tel" type="tel" placeholder="Telephone" className=" ring-input" required shadow rightIcon={FaPhone} inputMode="numeric" pattern="[0-9]*" />
                    </div>
                    <div>
                        <TextInput id="password1" type="password" placeholder="password" required shadow rightIcon={FaLock} />
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-1">
                            <Checkbox id="remember" className="focus:ring-0 text-primary" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Link href="#" className="text-sm">Forgot Password?</Link>
                    </div>
                    <Button type="button" variant="default" className=" bg-gradient-hero cursor-pointer" >Log in</Button>
                </form>
            </Card>
            <div className="flex gap-2 justify-center">
                <p>New User?</p>
                <Link href="/signup" className="text-amber">Create an Account</Link>
            </div>
        </div>


    );
}

export default LoginCard;