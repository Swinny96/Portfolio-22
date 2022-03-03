import React from 'react';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const AboutList = [
    {
        icon: <FaAward className='about_icon'/>,
        title: 'Experince',
        statement: '3+ Years Working in Industry',
    },
    {
        icon: <FiUsers className='about_icon'/>,
        title: 'Clients',
        statement: '300+ Clients Wordwide',
    },
    {
        icon: <VscFolderLibrary className='about_icon'/>,
        title: 'Projects',
        statement: '80+ Complete',
    },
]

export default AboutList