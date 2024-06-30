import exampleImg from '../../img/justForExample.jpg';

export default function Post() {
    return (
        <>
        <div className='content'>
  <div className='image'>
  <img src={exampleImg} alt='example image' />
  </div>
  <div className='texts'>
  <h2> Working hard is a cute effort!</h2>
  <p className='info'>
    <a className='author'>Aisha Alfassi</a>
    <time>2024-06-28 4:05</time>
  </p>
  <p className='summary'> Working hard to achieave your dreams it's something worth to do, in this article I will clarify you whay</p>
  </div>
    </div>
        </>
    );
}