import React from 'react'

function images() {
      var ar=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBD8NgPKA9w2Oz67Vik7YtCQgqD5xA2CNwFEoDUEiYO0h3DPc1LdZ8rXDSQPy8CFsANo&usqp=CAU","https://previews.123rf.com/images/asekeen/asekeen1305/asekeen130500002/19829291-3d-building-rendering.jpg","https://media.istockphoto.com/id/1172322907/photo/3d-render-3-buildings-exterior-view.jpg?s=612x612&w=is&k=20&c=fBgb721O3r77sqhh6ezJHnLePEtWZgoqrtZ-dfIJT3Q="]
  return (
    
   <div className='img1'>
    {
        ar.map((e)=>
          <img src={e}></img>
          
        )
    }
    </div>     
   
  )
}

export default images;