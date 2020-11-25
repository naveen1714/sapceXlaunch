import Main from '../../src/components';
import { makeUrl } from '../../src/actions';

function Programs(props) {
  return (
      <Main {...props} />
  )
}

// This function gets called at build time
export async function getServerSideProps(context) {
 
    const res = await fetch(makeUrl(context.query))
    const programs = await res.json()
  
    return {
      props: {
        programs 
      },
    }
  }

  export default Programs