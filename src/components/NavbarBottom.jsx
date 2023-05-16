import React, { useContext } from 'react'
import { ThemeContext } from '../context/ChangeThemeContext'

function NavbarBottom() {
	const {changeNavColor, changeMode, mode} = useContext(ThemeContext)	

	const btns = [
		"aqua", "green", "orange", "black", "red", "blue"
	]
	return (
		<div>
			<div className="colors">
				<div className="mode">
					<button onClick={changeMode}>
						{mode ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
					</button>
				</div>
				<div className="color">
					{btns.map((item)=>{
						return <button onClick={()=>{
							changeNavColor(item)
						}} style={{backgroundColor: item}}></button>
					})}
				</div>
			</div>
		</div>
	)
}

export default NavbarBottom