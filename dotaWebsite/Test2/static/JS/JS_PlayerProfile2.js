class MyProfileDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            matches: [],
            matchIndex: 0,
            heroes: [],
            heroesIndex: 0,
            profile: [],
        }
    }




    componentDidMount() {
        fetch('static\\JSON\\heroList.json')
            .then(response => response.json())
            .then(data2 => this.setState({ heroes: data2, isLoading: false }));
        fetch('static\\JSON\\matches_recent.json')
            .then(response => response.json())
            .then(data => this.setState({ matches: data, isLoading: false }));
        fetch('static\\JSON\\PlayerProfile.json')
            .then(response => response.json())
            .then(data => this.setState({ profile: data, isLoading: false }));

    }

    render() {
        if (this.state.isLoading) {
            return (<p>Loading ....</p>)
        } else {
            return (
                
                <>
                    <div key="profile" className="playerProfile">
                        {
                            this.state.profile.map(profile => {
                                return (
                                    <>
                                        <div key={"key_" + profile.id} className="playerProfileInfo">
                                            <img key={"imgkey_" + profile.id} src={profile.avatar}></img>
                                        </div>
                                        <div key={"key_" + profile.id} className="playerProfileInfo">
                                            <h1>{profile.name}</h1>
                                            <h3>{profile.id}</h3>
                                        </div>
                                        <div key={"key_" + profile.id} className="playerProfileInfo">
                                            <h2>Wins: {profile.wins}</h2>
                                            <h2>Losses: {profile.losses}</h2>
                                            <h2>Winrate: {profile.wr}</h2>
                                        </div>
                                        <div key={"key_" + profile.id} className="playerProfileInfo">
                                            {(() => {
                                                switch (profile.rank_name) {
                                                    case 1:
                                                        return "Herald: ";
                                                    case 2:
                                                        return "Guardian: ";
                                                    case 3:
                                                        return "Crusader: ";
                                                    case 4:
                                                        return "Archon: ";
                                                    case 5:
                                                        return "Legend: ";
                                                    case 6:
                                                        return "Ancient: ";
                                                    case 7:
                                                        return "Divine: ";
                                                    case 8:
                                                        return "Immortal: ";
                                                    default:
                                                        return "unranked";
                                                }
                                            })()}
                                            {profile.rank_number}
                                            {/* prifile.img */}
                                            <h2>MMR: {profile.rank_estimate}</h2>
                                        </div>
                                        <div key={"key_" + profile.id} className="playerProfileInfo">
                                            {(() => {
                                                switch (profile.rank_name) {
                                                    case 1:
                                                        return <img src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-rank-herald1.png"></img>
                                                    case 2:
                                                        return <img src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-rank-guardian-1.png"></img>
                                                    case 3:
                                                        return <img src="https://dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-rank-crusader-1.png"></img>;
                                                    case 4:
                                                        return <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a3/SeasonalRank4-5.png"></img>;
                                                    case 5:
                                                        return <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/SeasonalRank5-4.png"></img>;
                                                    case 6:
                                                        return <img src="https://cdn-0.dota2freaks.com/wp-content/uploads/sites/10/2020/02/dota-2-rank-ancient-3.png"></img>;
                                                    case 7:
                                                        return <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b7/SeasonalRank7-1.png"></img>
                                                    case 8:
                                                        return <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ad/SeasonalRankTop2.png"></img>
                                                    default:
                                                        return <img src="https://cdn.shopify.com/s/files/1/2312/2697/products/cali_3.png?v=1576660156"></img>
                                                }
                                            })()}
                                            </div>


                                    </>
                                )//match return of the if inside map 
                            })}
                    </div>
                    <div key={"Match"} className="gameInfoBoxKey">
                        <div key={"key_1"} className="matchInfoKey">
                        </div>
                        <div key={"key_11"} className="matchInfoKey">
                            {"Hero"}
                        </div>
                        <div key={"key_2"} className="matchInfoKey">
                            {"Match id"}<br></br>
                            {"Match Duration"}
                        </div>
                        <div key={"key_4"} className="matchInfoKey">
                            {"Kills"}
                        </div>
                        <div key={"key_5"} className="matchInfoKey">
                            {"Deaths"}
                        </div>
                        <div key={"key_6"} className="matchInfoKey">
                            {"Assists"}
                        </div>
                        <div key={"key_7"} className="matchInfoKey">
                            {"Team"} <br></br>
                            {"Result"}
                        </div>
                        <div key={"key_8"} className="matchInfoKey">
                            {"Party Size"}
                        </div>
                    </div>
                    {
                        this.state.matches.map(match => {
                            return (
                                <>
                                    <div key={match.match_id} className="gameInfoBox">
                                        {this.state.heroes.map(hero => {
                                            if (match.hero_name == hero.name) {
                                                return (
                                                    <>
                                                        <img key={"key_" + hero.id} className="matchInfoImg" src={hero.img}></img>
                                                    </>
                                                )
                                            }
                                        })}
                                        <div key={"key_" + match.match_id + match.hero_name} className="matchInfo">
                                            {match.hero_name}
                                        </div>
                                        <div key={"key_" + match.match_id + match.duration} className="matchInfo">
                                        {/* <form method="POST">   
                                            <button id="matchid-btn" type="submit" class="btn-playerid">
                                                {match.match_id}
                                            </button>
                                        </form> */}
                                            {match.match_id} <br></br>
                                            {match.duration}

                                        </div>
                                        <div key={"key_" + match.match_id + match.kills} className="matchInfo">
                                            {match.kills}
                                        </div>
                                        <div key={"key_" + match.match_id + match.deaths} className="matchInfo">
                                            {match.deaths}
                                        </div>
                                        <div key={"key_" + match.match_id+ match.assists} className="matchInfo">
                                            {match.assists}
                                        </div>
                                        <div key={"key_" + match.match_id} className="matchInfo">
                                            {match.team} <br></br>
                                            {match.result}
                                        </div>
                                        <div key={"key_" + match.match_id + match.party_size} className="matchInfo">
                                            {match.party_size}
                                        </div>
                                    </div>
                                </>
                            )//match return of the if inside map 
                        })}

                </>

            ) //match return in else of isLoading 

        } //match else of isLoading
    }


}
ReactDOM.render(<MyProfileDisplay />, document.querySelector('#divRecentMatchDisplay'))

