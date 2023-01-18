import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown , faHeart } from '@fortawesome/free-solid-svg-icons'
export const PicDetials = ({ pic }) => {
    
    function pickRand(){
        const array = [
            'https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
            'https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80',
            'https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
            'https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
            'https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80',
            'https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            'https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
            'https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
            'https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80',
            'https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        ]
        return array[Math.floor(Math.random() * array.length)]
    }

    function pushClasses(){
        const classes = ["card-tall  card-wide" , "card-tall" , "card-wide",""]
        // const classes = ["card-wide"," "]
        return classes[Math.floor(Math.random() * classes.length)]
    }

    function downloadImg(e){
        e.preventDefault()
        const file = e.currentTarget.parentNode.parentNode.style.backgroundImage.slice(5,-2)
        // const file = 'https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80'
    
        fetch(file, {
            method: 'GET',
            headers: {
            'Content-Type': "multipart/form-data",
            },
        })
        .then((response) => {
            response.blob()
            console.log("response : " ,response)
        })
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
            new Blob([blob]))
            console.log("url : " , url)
        
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
            'download',
            `FileName.jpeg`,
            );

            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            })
    }  


    return (
        <div 
            className={ `pic-detials ${ pushClasses ()}`} 
            style={{ backgroundImage : `url(${pic.imageUrl
                })` }} 
            download >
            {/* <p>{ pic.body }</p> */}
            <div className="img-title">
                <p>{ pic.title }</p>
            </div>
            <div className="img-lower">
                <div className="heartson">
                    <FontAwesomeIcon icon={ faHeart } />   
                </div>
                <div className="download" onClick={ downloadImg }>
                    <FontAwesomeIcon icon={ faArrowDown } />
                </div>
            </div>
        </div>

    )
}