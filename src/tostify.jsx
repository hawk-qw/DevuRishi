import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorToast = (e) => {
    toast.error(e)
}
const successToast = (e) => {
    toast.success(e)
}

export { errorToast, successToast }