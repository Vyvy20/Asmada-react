import React, {Component} from 'react';
import "../../Css/ModifActu.css"

function ModifActu() {
    return (

       

            <div className='ModifActuEns'>

                <h1 className='TitreModifActu'>Modification d'une actualité</h1>
                <hr className='SepModifActu'></hr>
                <form className='FormModifActu'>
                    <div className='ModifActu'>
                        <label className='LblTitreActuModif'>Titre :</label><br></br>
                        <input type='text' className='TxtTitreActuModif' placeholder='Test du moment'></input><br></br>
                        <label className='LblResuActuModif'>Résumé :</label><br></br>
                        <textarea className='TxtResuActuModif' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'></textarea><br></br>
                        <label className='LblDescActuModif'>Description :</label><br></br>
                        <textarea className='TxtDescActuModif' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean vel. Eu ultrices vitae auctor eu augue ut lectus arcu. Semper quis lectus nulla at volutpat. Facilisis sed odio morbi quis. Donec ac odio tempor orci. Aliquam id diam maecenas ultricies mi. Pharetra convallis posuere morbi leo urna. Amet facilisis magna etiam tempor. Tellus rutrum tellus pellentesque eu. Quam id leo in vitae turpis massa sed elementum. Vel facilisis volutpat est velit egestas dui id ornare. Etiam erat velit scelerisque in dictum non consectetur. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Imperdiet proin fermentum leo vel orci porta non. Lorem sed risus ultricies tristique.
Odio morbi quis commodo odio aenean sed adipiscing. Lacus luctus accumsan tortor posuere ac ut. Sit amet volutpat consequat mauris nunc congue nisi. Scelerisque in dictum non consectetur a erat nam at. Dapibus ultrices in iaculis nunc sed augue lacus. Euismod elementum nisi quis eleifend quam adipiscing vitae. Enim ut tellus elementum sagittis vitae. Consequat ac felis donec et. Pellentesque adipiscing commodo elit at imperdiet. Morbi tincidunt ornare massa eget. Aliquet risus feugiat in ante metus dictum at tempor commodo. Bibendum est ultricies integer quis auctor elit. Luctus venenatis lectus magna fringilla urna. Nulla facilisi etiam dignissim diam quis enim. Morbi quis commodo odio aenean sed adipiscing diam. Sed tempus urna et pharetra. Pellentesque sit amet porttitor eget dolor morbi. A condimentum vitae sapien pellentesque habitant morbi tristique.
Convallis tellus id interdum velit laoreet. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu consequat ac felis donec et odio pellentesque diam volutpat. Tellus mauris a diam maecenas sed enim ut. Et odio pellentesque diam volutpat commodo sed. Sed tempus urna et pharetra. Tempus imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis. Convallis convallis tellus id interdum velit laoreet. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Tempor nec feugiat nisl pretium. Cras adipiscing enim eu turpis egestas pretium aenean.
Sociis natoque penatibus et magnis. Odio aenean sed adipiscing diam donec. Nec feugiat in fermentum posuere urna nec tincidunt. Faucibus vitae aliquet nec ullamcorper sit amet risus. Leo a diam sollicitudin tempor id eu nisl. Facilisi cras fermentum odio eu feugiat pretium nibh. Luctus accumsan tortor posuere ac ut consequat semper. Risus viverra adipiscing at in tellus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Elementum tempus egestas sed sed risus pretium quam. Commodo odio aenean sed adipiscing diam donec. Elementum sagittis vitae et leo duis ut diam quam nulla. Ullamcorper morbi tincidunt ornare massa eget. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quam vulputate dignissim suspendisse in est ante in nibh. Pellentesque elit eget gravida cum sociis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Vitae congue eu consequat ac.'></textarea><br></br>
                        <input type='submit' className='BtnModifActu' value='Modifier'></input>
                        <input type='submit' className='BtnAnnulActuModif' value='Annuler'></input>
                    </div>
                </form>
            </div>
    )
}

export default ModifActu;