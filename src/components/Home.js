import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

class Home extends React.Component {
    render() {
        return (
                <ReactFullpage
                    navigation
                    loopTop
                    loopBottom
                    onLeave={() => {
                        document.getElementsByClassName('full-screen--video')[0].play();
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section'>
                                    <div className='full-screen full-screen__flex'>
                                        <video className='full-screen--video' loop autoPlay playsInline muted>
                                            <source src='https://drive.google.com/uc?export=download&id=1Hb1ZjZCPQCwwpxKftx5vD-t50AdyoOZw' type='video/webm' />
                                            <source src='https://drive.google.com/uc?export=download&id=1Hb1ZjZCPQCwwpxKftx5vD-t50AdyoOZw' type='video/mp4' />
                                        </video>
                                        <div className='logo'>
                                            <span className='logo--heading'>Saray</span>
                                            <span className='logo--subheading'>Photostudio</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='full-screen'>
                                        <h1>Тут будут новости</h1>
                                    </div>
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                }}
            />
        )
    }
}

export default Home;