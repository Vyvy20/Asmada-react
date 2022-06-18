import React, {Component} from 'react';
import "../../Css/DetailActu.css"
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const PictureNews = new URL("../../images/Journal.jpeg", import.meta.url)
const PictureEcole = new URL("../../images/ecole.jpg", import.meta.url)

function DetailActu() {
    return (

        <div className="page-top">

            <div> 
                <img className="Photo1Miss" src={PictureNews} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                    Une école est ouverte !
                    </h1>
                </div><br/><br/>
            </section>
            <div className='MissionActuDetail'>

                <img className="Photo2Actu2" src={PictureEcole} /><br></br>
                <p className='TxtActu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean vel. Eu ultrices vitae auctor eu augue ut lectus arcu. Semper quis lectus nulla at volutpat. Facilisis sed odio morbi quis. Donec ac odio tempor orci. Aliquam id diam maecenas ultricies mi. Pharetra convallis posuere morbi leo urna. Amet facilisis magna etiam tempor. Tellus rutrum tellus pellentesque eu. Quam id leo in vitae turpis massa sed elementum. Vel facilisis volutpat est velit egestas dui id ornare. Etiam erat velit scelerisque in dictum non consectetur. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Imperdiet proin fermentum leo vel orci porta non. Lorem sed risus ultricies tristique.<br></br>
    Odio morbi quis commodo odio aenean sed adipiscing. Lacus luctus accumsan tortor posuere ac ut. Sit amet volutpat consequat mauris nunc congue nisi. Scelerisque in dictum non consectetur a erat nam at. Dapibus ultrices in iaculis nunc sed augue lacus. Euismod elementum nisi quis eleifend quam adipiscing vitae. Enim ut tellus elementum sagittis vitae. Consequat ac felis donec et. Pellentesque adipiscing commodo elit at imperdiet. Morbi tincidunt ornare massa eget. Aliquet risus feugiat in ante metus dictum at tempor commodo. Bibendum est ultricies integer quis auctor elit. Luctus venenatis lectus magna fringilla urna. Nulla facilisi etiam dignissim diam quis enim. Morbi quis commodo odio aenean sed adipiscing diam. Sed tempus urna et pharetra. Pellentesque sit amet porttitor eget dolor morbi. A condimentum vitae sapien pellentesque habitant morbi tristique.<br></br>
    Convallis tellus id interdum velit laoreet. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu consequat ac felis donec et odio pellentesque diam volutpat. Tellus mauris a diam maecenas sed enim ut. Et odio pellentesque diam volutpat commodo sed. Sed tempus urna et pharetra. Tempus imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis. Convallis convallis tellus id interdum velit laoreet. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Tempor nec feugiat nisl pretium. Cras adipiscing enim eu turpis egestas pretium aenean.<br></br>
    Sociis natoque penatibus et magnis. Odio aenean sed adipiscing diam donec. Nec feugiat in fermentum posuere urna nec tincidunt. Faucibus vitae aliquet nec ullamcorper sit amet risus. Leo a diam sollicitudin tempor id eu nisl. Facilisi cras fermentum odio eu feugiat pretium nibh. Luctus accumsan tortor posuere ac ut consequat semper. Risus viverra adipiscing at in tellus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Elementum tempus egestas sed sed risus pretium quam. Commodo odio aenean sed adipiscing diam donec. Elementum sagittis vitae et leo duis ut diam quam nulla. Ullamcorper morbi tincidunt ornare massa eget. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quam vulputate dignissim suspendisse in est ante in nibh. Pellentesque elit eget gravida cum sociis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Vitae congue eu consequat ac.</p>

            </div>
        </div>
    )
}

export default DetailActu;