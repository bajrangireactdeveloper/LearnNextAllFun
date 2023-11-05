import React from 'react'
import Image from 'next/image';

 function ImageCompont() {
  return (
    <div>
        <h2>Fetch Image</h2>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YLe3D_HN8E7maI-H1Tg6AFXb5EtluLlb3wA6fC7iKA&s"
      width={500} height={500}/>
    </div>
  )
}


export default ImageCompont;