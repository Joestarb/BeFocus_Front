import Header from '../../src/components/Index/Header'
import Nabar from '../../src/components/Index/Navbar'
import Footer from '../components/Index/Footer'
import IndexContent from '../components/Index/IndexContent'
import IndexContent2 from '../components/Index/IndexContent2'

function index() {
  return (
    <div>
        <Nabar/>
        <Header/>
        <IndexContent/>
        <IndexContent2/>
        <Footer/>
    </div>
  )
}

export default index