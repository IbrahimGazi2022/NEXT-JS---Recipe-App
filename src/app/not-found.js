import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h1>This page connot be found</h1>
      <Link href={"/"}>Go To Home</Link>
    </div>
  )
}

export default notFound
