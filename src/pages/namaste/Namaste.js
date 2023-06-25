import Layout from '../../components/layout/Layout'
import './namaste.scss'
import React, { useEffect, useState } from 'react'
import {ReactComponent as DomainField} from "../../assets/images/domainName.svg"
import {ReactComponent as Subtract} from "../../assets/images/subtract.svg"
import location from './location.json'

const Namaste = () => {
    const [formNumber, setFormNumber] = useState(1)
    
    const [educationLevel, setEducationLevel] = useState("Doctorate"); 
    const [workStyle, setWorkStyle] = useState("Remote");
    const [countryEducation, setCountryEducation] = useState("");
    const [college, setCollege] = useState("")
    const [profession, setProfession] = useState("")
    const [workPlace, setWorkPlace] = useState("")
    ///////////////////////

    const [country, setCountry] = useState("USA"); 
    const [state, setState] = useState("New Jersey");
    const [states, setStates] = useState(location[0]['USA']);
    const [city, setCity] = useState('Piscataway')
    const [raised, setRaised] = useState('India')
    const [languages, setLanguages] = useState('India')
    const [siblings, setSiblings] = useState('2')
    const [childrenPlan, setChildrenPlan] = useState('Open to kids')
    const [birthChart, setBirthChart] = useState('Yes')

    ///////////////////////////////////

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dob, setDob] = useState();
    const [feet, setFeet] = useState("5");
    const [inch, setInch] = useState('3');
    
    const handleBirthChart = (e) => {
        setBirthChart(e.target.value)
    }

    const handleChildrenPlanChange = (e) => {
        setChildrenPlan(e.target.value)
    }

    const handleSiblings = (e) => {
        setSiblings(e.target.value)
    }

    const handleLanguagesChange = (e) => {
        setLanguages(e.target.value)
    }

    const handleRaisedChange = (e) => {
        setRaised(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const handleStateChange = (e) => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted")
    }

    const handleEducationLevelChange = (e) => {
        setEducationLevel(e.target.value)
    }

    const handleCountryEducationChange = (e) => {
        setCountryEducation(e.target.value)
    }

    const handleCollegeChange = (e) => {
        setCollege(e.target.value)
    }

    const handleProfessionChange = (e) => {
        setProfession(e.target.value)
    }
    const handleWorkPlaceChange = (e) => {
        setWorkPlace(e.target.value)
    }
    const handleWorkStyleChange = (e) => {
        setWorkStyle(e.target.value)
    }
    const handleSave = () => {
        alert("Save button clicked")
    }

    useEffect(()=> {
        // console.log(location[0].USA)
        setStates(location[0][country])

    }, [country])

    return (
        
        <Layout pageName="namaste">
            <div className='namaste-wrapper'>
                <DomainField className='domain-field'/>
                <h1>Namaste</h1>
                <form className='namaste-content' onSubmit={handleSubmit}>    
                    <div className='form1'>
                        <div className="lay-center">
                            <div className='input-group'>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Education Level</label>
                                        <select id="educationLevel" value={educationLevel} onChange={handleEducationLevelChange}>
                                            <option value="Doctorate">Doctorate</option>
                                            <option value="MBA">MBA</option>
                                            <option value="Masters">Masters</option>
                                            <option value="Bachelors">Bachelors</option>
                                            <option value="Associates">Associates</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Country of education</label>
                                        <input type='text' placeholder='India' value={countryEducation} onChange={handleCountryEducationChange}></input>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>College name</label>
                                        <input type='text' placeholder='India' value={college} onChange={handleCollegeChange}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Profession</label>
                                        <input type='text' placeholder='Developer' value={profession} onChange={handleProfessionChange}></input>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Where do you work</label>
                                        <input type='text' placeholder='Goldman sachs' value={workPlace} onChange={handleWorkPlaceChange}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Work style</label>
                                        <select id="workStyle" value={workStyle} onChange={handleWorkStyleChange}>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="On-site">On-site</option>
                                            <option value="Co-working">Co-working</option>
                                        </select>
                                    </div>
                                </div>
                            </div>                
                            <div className='save-next'>
                                <a onClick={handleSave}>Save</a>
                                <button type='submit'>Sign up</button>
                            </div>
                        </div>
                        <div className='subtract' style={formNumber === 2 ? { display: "none" } : null}>
                            <Subtract onClick={() => setFormNumber(2)} />
                        </div>
                    </div>
                    <div className='form2' style={formNumber === 0 ? { height: "593px"} : formNumber === 1 ? null : { height: "182px" }}>
                        <div className="lay-center" style={formNumber === 1 ? null : { display: "none" }}>
                            <div className='input-group'>
                                <div className='input-row'>
                                    <div className="radio-container">
                                        <label className="radio-label-text">How do you currently live</label>

                                        <div className="radio-group">
                                            <input type="radio" id="option1" name="radio" className="radio-input" />
                                            <label htmlFor="option1" className="radio-label">Nuclear</label>

                                            <input type="radio" id="option2" name="radio" className="radio-input" />
                                            <label htmlFor="option2" className="radio-label">Joint</label>

                                            <input type="radio" id="option3" name="radio" className="radio-input" />
                                            <label htmlFor="option3" className="radio-label">Just Me</label>

                                            <input type="radio" id="option4" name="radio" className="radio-input" />
                                            <label htmlFor="option4" className="radio-label">Roommates</label>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Location Country</label>
                                        <select id="country" value={country} onChange={handleCountryChange}>
                                            <option value="USA">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="Au">Australia</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>State</label>
                                        <select id="state" value={state} onChange={handleStateChange}>
                                            {
                                                states.map((state) => {
                                                    
                                                    return <option value={state.name} key={state.name}>{state.name}</option>
                                                }) 
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>City</label>
                                        <input type='text' value={city} onChange={handleCity}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Country Raised in?</label>
                                        <select id="raisedIn" value={raised} onChange={handleRaisedChange}>
                                            <option value="Au">Australia</option>
                                            <option value="UK">Kenya</option>
                                            <option value="India">India</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Germany">Germany</option>

                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Languages spoken</label>
                                        <select id="languages" value={languages} onChange={handleLanguagesChange}>
                                            <option value="Brahmins">Brahmins</option>
                                            <option value="Gujarati">Gujarati</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Telugu">Telugu</option>
                                            <option value="Sunni">Sunni</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Siblings</label>
                                        <select id="siblings" value={siblings} onChange={handleSiblings}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Plans for children</label>
                                        <select id="childrenPlan" value={childrenPlan} onChange={handleChildrenPlanChange}>
                                            <option value="open">Open to kids</option>
                                            <option value="want">Want someday</option>
                                            <option value="dont want">Don't want</option>
                                            <option value="Have and want more">Have and want more</option>
                                            <option value="have and dont want more">Have and don't want more</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Believe in birth chart (Kundali)</label>
                                        <select id="birthChart" value={birthChart} onChange={handleBirthChart}>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>                
                            
                        </div>
                        <div className='subtract' style={formNumber === 1 ? { display: "none" } : formNumber === 0 ? {marginTop: "550px"} : {marginTop: "140px"}}>
                            <Subtract onClick={() => setFormNumber(1)} />
                        </div>
                    </div>
                    <div className='form3' style={formNumber === 0 ? {padding: "0 31px"} : { height: "89px" }}>
                        <div className="lay-center" style={formNumber === 0 ? {display: "flex"} : { display: "none" }}>
                            
                            <div className='input-group' style={{flex: "3"}}>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>First Name</label>
                                        <input type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Last Name</label>
                                        <input type='text' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
                                    </div>
                                    
                                </div>

                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>DOB</label>
                                        <input type='text' value={dob} placeholder='DD/MM/YYYY' onChange={(e)=>{setDob(e.target.value)}}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Height</label>
                                        <div className='phone-number'>
                                            <select id="feet" value={feet} onChange={(e)=> {setFeet(e.target.value)}} style={{marginRight:"8px"}}>
                                                <option value="3">3 Ft</option>
                                                <option value="4">4 Ft</option>
                                                <option value="5">5 Ft</option>
                                                <option value="6">6 Ft</option>
                 
                                            </select>
                                            <select id="inch" value={inch} onChange={(e)=>{setInch(e.target.value)}}>
                                                <option value="0">0 In</option>
                                                <option value="1">1 In</option>
                                                <option value="2">2 In</option>
                                                <option value="3">3 In</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Gender</label>
                                        <select id="country" value={country} onChange={handleCountryChange}>
                                            <option value="USA">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="Au">Australia</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>State</label>
                                        <select id="state" value={state} onChange={handleStateChange}>
                                            {
                                                states.map((state) => {
                                                    
                                                    return <option value={state.name} key={state.name}>{state.name}</option>
                                                }) 
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>City</label>
                                        <input type='text' value={city} onChange={handleCity}></input>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Country Raised in?</label>
                                        <select id="raisedIn" value={raised} onChange={handleRaisedChange}>
                                            <option value="Au">Australia</option>
                                            <option value="UK">Kenya</option>
                                            <option value="India">India</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Germany">Germany</option>

                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Languages spoken</label>
                                        <select id="languages" value={languages} onChange={handleLanguagesChange}>
                                            <option value="Brahmins">Brahmins</option>
                                            <option value="Gujarati">Gujarati</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Telugu">Telugu</option>
                                            <option value="Sunni">Sunni</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Siblings</label>
                                        <select id="siblings" value={siblings} onChange={handleSiblings}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='input-row'>
                                    <div className='input-unit'>
                                        <label>Plans for children</label>
                                        <select id="childrenPlan" value={childrenPlan} onChange={handleChildrenPlanChange}>
                                            <option value="open">Open to kids</option>
                                            <option value="want">Want someday</option>
                                            <option value="dont want">Don't want</option>
                                            <option value="Have and want more">Have and want more</option>
                                            <option value="have and dont want more">Have and don't want more</option>
                                        </select>
                                    </div>
                                    <div className='input-unit'>
                                        <label>Believe in birth chart (Kundali)</label>
                                        <select id="birthChart" value={birthChart} onChange={handleBirthChart}>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>    
                            <div className='zodiac'>
                                <input type="radio" id="option1" name="radio" className="radio-input" />
                                <label htmlFor="option1" className="radio-label">Nuclear</label>

                                {/* <input type="radio" id="option2" name="radio" className="radio-input" />
                                <label htmlFor="option2" className="radio-label">Joint</label>

                                <input type="radio" id="option3" name="radio" className="radio-input" />
                                <label htmlFor="option3" className="radio-label">Just Me</label>

                                <input type="radio" id="option4" name="radio" className="radio-input" />
                                <label htmlFor="option4" className="radio-label">Roommates</label> */}
                            </div>            
                            
                        </div>
                        <div className='subtract' style={formNumber === 0 ? { display: "none" } : {marginTop: "45px"}}>
                            <Subtract onClick={() => setFormNumber(0)} />
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Namaste