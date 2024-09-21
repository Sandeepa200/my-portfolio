import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/propic-rounded.png" width={54} height={54} priority alt="logo" />
        </Link>
    )
}

export default Logo;