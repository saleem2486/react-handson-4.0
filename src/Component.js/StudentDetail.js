import React from 'react';
import { Link } from 'react-router-dom';
const StudentDetail = () => {
    return (
        <>
         
           
<div className='navbarheadbutton'>
    <span>
        Student Details
    </span>
    <button>
        Add New Student
    </button>
</div>

            <table border={"2px"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                       <th><Link>Edit</Link></th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deepak</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Sangram</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Saleem</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Kishan</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Vijay</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Abdul Naid</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Altamash</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Malik</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Nasit</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Sahid</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>E21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                </tbody>
            </table>



        </>
    );
}

export default StudentDetail;
