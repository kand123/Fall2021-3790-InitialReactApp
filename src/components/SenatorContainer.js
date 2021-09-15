import * as React from 'react'
import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const SenatorContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {senators.map((senator) => {
        return (
          <SenatorCard key={senator.id} modalFunctions={[handleOpen, handleClose]} senator={{ ...senator }}
          />
        )
      })}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Senator Information
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Maybe more Senator Information goes here?
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default SenatorContainer
