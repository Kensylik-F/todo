
import { useEffect, useRef } from 'react'
import './Calendar.scss'


export const Calendar: React.FC = () =>{
	const today = new Date()
	const startDate = new Date(today)
	const viewInDay = 11
	startDate.setDate(today.getDate() - viewInDay);

	const dates = Array.from({length: viewInDay * 2 + 1}, (_, i )=>{
		const date = new Date(startDate)
		date.setDate(startDate.getDate() + i)
		return date
	})

	const todayRef = useRef<HTMLDivElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(()=>{
		if(todayRef.current){
			todayRef.current.scrollIntoView({
				behavior: 'auto',
				block:'nearest',
				inline: 'center'
			})
		}
	},[])
	useEffect(()=>{
		const handleWheel = (event: WheelEvent)=>{
			if(wrapperRef.current){
				wrapperRef.current.scrollBy({
					left: event.deltaY < 0 ? -300 : 300,
					behavior: 'smooth'
				})
			}
		}
		const wrapper = wrapperRef.current
		if(wrapper){
			wrapper.addEventListener('wheel', handleWheel)
		}

		return() =>{
			if(wrapper){
				wrapper.addEventListener('wheel', handleWheel)
			}
		}
	},[])

	return(
		<div className="calendar-container">
			<div className='calendar-wrapper' ref={wrapperRef}>
			<div className="calendar-line">
				{dates.map((date, index)=>{
					const isToday = date.toDateString() === today.toDateString();
					const isPast = date < today;
					const dayShort = date.toLocaleDateString('ru-RU',{weekday: 'short'})
					return (
						<button>
							<div key={index}
							className={`day ${isToday ? "today" : isPast ? "past" : "future"}`}
							ref={isToday ? todayRef : null}>
								<span>{date.getDate()}</span>
								<span>{dayShort}</span>
							</div>
						</button>
					)
				})}
			</div>
			</div>
		</div>
	)
}