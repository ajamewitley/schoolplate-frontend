"use client"
import { Card, TextInput, HRText } from "flowbite-react";
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle, FaUser,FaPhone,FaLock } from "react-icons/fa";

const SignUpCard = () => {
    return (
        <div className="gap-4 flex-col flex">
            <Card className="bg-card">
                <h1 className="text-center text-2xl font-black">Create a New Account</h1>
                <Button variant="amber" className="cursor-pointer bg-accent shadow-soft"><FaGoogle color="blue" className=" rotate-10 text-3xl" /> Sign up with Google</Button>
                <Button className="cursor-pointer border-secondary bg-blue-500 hover:bg-blue-500"><FaFacebook />Sign up with Facebook</Button>
                <HRText text="OR" />
                <form className="flex flex-col gap-4">
                    <div>
                        <TextInput id="name" type="text" placeholder="FullName" className=" ring-input" required shadow rightIcon={FaUser} />
                    </div>
                    <div>
                        <TextInput id="tel" type="tel" placeholder="Telephone" className=" ring-input" required shadow rightIcon={FaPhone} />
                    </div>
                    <div>
                        <TextInput id="password1" type="password" placeholder="password" required rightIcon={FaLock} />
                    </div>
                    <div>
                        <TextInput id="password1" type="password" placeholder="Confirm password" required />
                    </div>
                    <Button variant="default" className=" bg-gradient-hero cursor-pointer" >Sign Up</Button>
                </form>
            </Card>
        </div>
    );
}

export default SignUpCard;