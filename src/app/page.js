import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Link href={"/recipe-list-page"}>
                <Button variant="destructive">GO TO RECIPE PAGE</Button>
            </Link>
        </div>
    );
};

export default page;
