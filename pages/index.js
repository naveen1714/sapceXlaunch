import Main from '../src/components';
import { makeUrl } from '../src/actions';

export function Home(props) {
  return (
      <Main {...props} />
  )
}


// This function gets called at build time
export async function getServerSideProps(context) {
 
  // Call an external API endpoint to get programms
  const res = await fetch(makeUrl(context.query))
  const programs = await res.json()
 
  return {
    props: {
      programs 
    },
  }
}

export default Home