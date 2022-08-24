interface Props {
  image: any
}

const Image = ({image}: Props) => {
  return (
    <div className='howto__imgContainer'>
      <img src={image} alt='' style={{width: '220px'}} />
    </div>
  )
}

export default Image;
