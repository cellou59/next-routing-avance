import Link from 'next/link'
const page = ({params}: {params: {subcategories: string[]}}) => {
  console.log(params.subcategories)
  return (
    <div>
      My SUB Categories :
      <ul>
        {params.subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href="/final/dynamic/shop/home">back</Link>
    </div>
  )
}

export default page
