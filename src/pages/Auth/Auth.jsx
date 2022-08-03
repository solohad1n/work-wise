import { Box } from '@mui/material'
import { useTheme } from '@mui/system'
import React from 'react'
import { Login } from '../../components/Login/Login'



export const Auth = () => {
  const theme = useTheme()

  return (
    <Box style={{ background: theme.palette.primary.main, height: '100vh' }}>
      <Login />
    </Box>
  )
}
