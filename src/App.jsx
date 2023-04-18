import useStyles from './styles'

function App() {
  const {classes} = useStyles()

  return <div className={classes.hello}>Hello</div>
}

export default App
