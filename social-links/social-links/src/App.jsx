import avatar from './assets/images/avatar-jessica.jpeg'
import SocialLinks from './SocialLinks'
import './index.css'

function App() {

  return (
    <>
     <div className="container">
      <div className="hero">
        <div>
          <img src={avatar} alt="avatar" className='avatar' style={style}/>
          <h2 className="name">Jessica Randall</h2>
          <p className="color">London, United Kingdom</p>
        </div>
        <p className="skill">&quot;Front-end developer and avid reader.&quot;</p>
      </div>
      <SocialLinks />
     </div>
    </>
  )
}

const style = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  margin: '5px 0'
}

export default App
