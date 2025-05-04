import DropDown from "../components/DropDown";
import PointsTab from "../components/PointsTab";


export default function Page() {
    return (
        <main className={"grid gap-3 justify-center mt-[20px] h-full"}>
            <DropDown
                title="Select your Initial Roster"
                sections={[
                    {
                        heading: "Roster Size",
                        content: (
                            <>
                                <p>
                                    To join the game, select a fantasy basketball roster of 10 players:
                                </p>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>5 Back Court players</li>
                                    <li>5 Front Court players</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        heading: "Players Per Team",
                        content: (
                            <p>You can select up to 2 players from a single NBA team.</p>
                        ),
                    },
                ]}
            />
            <DropDown title={"Managing your Team"}
                      sections={[
                          {
                              heading: "Choosing your Line-up",
                              content: (
                                  <>
                                      <p>
                                          From your 10 player roster, select 5 players by the Gameday deadline to form your starting line-up.
                                      </p>
                                      <p className={"mt-3"}>
                                          All your points for the Gameday will be scored by these 5 players, however if one or more doesn't play they may be automatically substituted.
                                      </p>
                                      <ul className="list-disc pl-6 mt-2">
                                          <li>2 Back Court & 3 Front Court</li>
                                          <li>3 Back Court and 2 Front Court</li>
                                      </ul>
                                      <h5 className="text-md font-bold mt-2">Prioritising Your Bench For Automatic Substitutions</h5>
                                      <p className={"mt-1"}>
                                          Your bench provides cover for unforeseen events like injuries and postponements by automatically replacing starting players who don't play in a Gameday.
                                      </p>
                                      <p className={"mt-2"}>
                                          Playing in a Gameday means playing at least 1 minute. Based on the priorities you assign, automatic substitutions are processed at 8 AM UTC, after the last game of the Gameday has finished.
                                      </p>
                                      <p className={"mt-2"}>
                                          If any of your players don't play in the Gameday, they will be substituted by the highest priority bench player who played in the Gameday and doesn't break the formation rules (e.g., If your starting team has 2 Back Court players, a Back Court player can only be replaced by another Back Court player).
                                      </p>
                                  </>
                              )
                          }
                      ]}/>
            <DropDown
                title="Scoring"
                sections={[
                    {
                        heading: "",
                        content: (
                            <>
                                <p>
                                    During the season, your NBA fantasy players will be allocated points based on their performance in the league.
                                </p>
                            </>
                        ),
                    },
                    {
                        heading: "",
                        content: (
                            <>
                                <PointsTab value1={"Action"} value2={"Points"}/>
                                <PointsTab value1={"For each point scored"} value2={"1"}/>
                                <PointsTab value1={"For each rebound"} value2={"1.2"}/>
                                <PointsTab value1={"For each assist"} value2={"1.5"}/>
                                <PointsTab value1={"For each block"} value2={"3"}/>
                                <PointsTab value1={"For each steal"} value2={"3"}/>
                                <PointsTab value1={"For each turnover"} value2={"-1"}/>
                                <p className={"mt-5"}>Once data has been marked as final, it will not be changed. We will not enter into discussion around any of the statistics used to calculate fantasy scores for any individual game.</p>
                            </>
                        ),
                    },
                ]}
            />
            <DropDown
                title="Grading"
                sections={[
                    {
                        heading: "Team Grading ",
                        content: (
                            <>
                                <p>
                                    After submitting your roster, your fantasy team will be automatically evaluated and assigned a grade based on several core performance metrics. These metrics are designed to reward balanced, high-upside lineups that align with real-world NBA performance and fantasy value.
                                </p>

                            </>
                        ),
                    },
                    {
                        heading: "How your Grade is Calculated",
                        content: (
                            <>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>
                                        <span className="font-semibold text-black">Positional Balance:</span> Teams should include a healthy mix of backcourt and frontcourt players. Heavily skewed rosters will be penalized.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-black">Statistical Strength: </span> Individual players are scored on core fantasy stats (e.g., points, assists, rebounds, steals, blocks, efficiency).
                                    </li>
                                    <li>
                                        <span className="font-semibold text-black">Team Synergy:</span> Rosters with overlapping strengths and minimized weaknesses are rewarded.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-black">Salary Efficiency:</span> Rosters that maximize player performance per salary unit gain bonus points.

                                    </li>
                                </ul>
                                <p className={"mt-5"}>Each category contributes a portion to your final score, which is then converted into a letter grade (e.g., A+, B-, C).</p>
                            </>
                        ),
                    },
                ]}
            />
            <DropDown
                title="Grading Penalties"
                sections={[
                    {
                        heading: "What can bring down your Grade",
                        content: (
                            <>
                                <ul className="list-disc pl-6 mt-2">
                                    <li>Teams missing required positional depth may be capped at a maximum grade of C.</li>
                                    <li>Overloaded single-team rosters may receive synergy deductions to prevent stacking.</li>
                                    <li>Late submissions or last-minute changes may not be factored in depending on timing.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        heading: "",
                        content: (
                            <></>
                        ),
                    },
                ]}
            />
        </main>
    );
}
