import assets from '../../assets';
import './rodmap.css';

export const Rodmap = () => {
	return (
		<div className='rodmap-section' id='rodmap'>
			<div className="title">
				<h2 className="title-text__pink">ROADMAP</h2>
			</div>
			<div className="rodmap-content">
				<div className="rodmap-content__box">
					<div className="title">
						<img src={assets.numberOne} alt="number one" />
						<h2 className='rodmap-content__title'>Phase1</h2>
					</div>
					<p className='rodmap-content__info'>
						1. Development phase <br />
						2. Fair Launch <br />
						3. Audit/Whitepaper <br />
						4. Staking pools <br />
						5. Coinmarketcap <br />
						6. Callers/influencer
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box rodmap-content__two">
					<div className="title">
						<img src={assets.numberTwo} alt="number two" />
						<h2 className='rodmap-content__title'>Phase2</h2>
					</div>
					<p className='rodmap-content__info'>
						1. $LOVE Airdrop campaigns <br />
						2. NFT collection <br />
						3. P2E Game <br />
						4. Huge influencer/marketing campaigns <br />
						5. Tir 2 CEX listing <br />
						6. AI Integration
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box">
					<div className="title">
						<img src={assets.numberThree} alt="number one" />
						<h2 className='rodmap-content__title'>Phase3</h2>
					</div>
					<p className='rodmap-content__info'>
						1. Big partnership <br />
						2. Ter1 CEX listing <br />
						3. Mass adoption
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box rodmap-content__two">
					<div className="title">
						<img src={assets.numberFour} alt="number two" />
						<h2 className='rodmap-content__title'>Phase4</h2>
					</div>
					<p className='rodmap-content__info'>
						1. Big partnership <br />
						2. Ter1 CEX listing <br />
						3. Mass adoption
					</p>
				</div>
			</div>
		</div>
	)
}
