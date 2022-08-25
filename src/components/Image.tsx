interface Props {
  image: any
}

const Image = ({image}: Props) => {
  return (
    <div className='howto__imgContainer'>
      <img src={image} alt='' />
    </div>
  )
}

export default Image;
