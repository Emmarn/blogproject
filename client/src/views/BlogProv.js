import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const handleUserInputs = (e) => {

    console.log(e.target.name, " <-------------")
    setUserCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
}