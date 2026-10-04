import Link from 'next/link';


interface Navs {

          slug: string
          string: string
          topicId: string | null
          scrapable: boolean
}
 

const NavLinks = async() => {
          const res = await fetch('https://news-api-v2.vercel.app/api/categories')
          const data = await res.json()
          const navs:Navs[] = data.data;

          const filteredNavs = navs.filter(n => n.scrapable)
          console.log(navs)
          return (
                    <div className="flex gap-5 justify-center  translate-x-110 mt-4">

                              <Link href={'/'}>হোম</Link>
                              {filteredNavs.map((n, i) => <Link key={i} href={n.slug}>{n.title}</Link>)}
                              
                    </div>
          );
};

export default NavLinks;