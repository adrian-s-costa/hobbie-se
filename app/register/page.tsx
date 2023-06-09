import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-screen bg-ivory">
      <div className="z-10 w-full max-w-md overflow-hidden border border-purple shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-purple bg-ivory px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold text-purple">Sign Up</h3>
          <p className="text-sm text-purple">
          Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
      <img src="/montain.jpg" className="w-full object-cover"/>
    </div>
  );
}