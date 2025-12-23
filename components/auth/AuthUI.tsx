"use client"
import LoginCard from "@/components/auth/LoginCard";
import { TabItem, Tabs } from "flowbite-react";
import SignUpCard from "@/components/auth/SignUpCard";
import { LogInIcon } from "lucide-react";
import { FaSignInAlt,FaRegistered } from "react-icons/fa";


const AuthUI = () => {
    return (
        <Tabs variant="underline" className="flex justify-around"  >
                    <TabItem title="Login" className="text-3xl cursor-pointer" icon={FaSignInAlt}>
                        <LoginCard />                      
                    </TabItem>
                    <TabItem title="Signup" icon={FaRegistered}>
                        <SignUpCard />
                    </TabItem>
                </Tabs>
    );
}

export default AuthUI;