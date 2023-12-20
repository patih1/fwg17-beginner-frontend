import Check from '../assets/icon/check.svg'

// eslint-disable-next-line react/prop-types
const Article = ({desc}) => {
  return(
    <div className="flex items-center gap-3">
      <img src={Check} alt="" />
      <p>{desc}</p>
    </div>
  )
}

export default Article