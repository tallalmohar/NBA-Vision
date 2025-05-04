import DropDown from "../components/DropDown";

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
                                      <h5 className="text-sm font-bold mt-2">Prioritising Your Bench For Automatic Substitutions</h5>
                                      <p>
                                          Your bench provid`es cover for unforeseen events like injuries and postponements by automatically replacing starting players who don't play in a Gameday.
                                      </p>
                                      <p>
                                          Playing in a Gameday means playing at least 1 minute. Based on the priorities you assign, automatic substitutions are processed at 8 AM UTC, after the last game of the Gameday has finished.
                                      </p>
                                      <p>
                                          If any of your players don't play in the Gameday, they will be substituted by the highest priority bench player who played in the Gameday and doesn't break the formation rules (e.g., If your starting team has 2 Back Court players, a Back Court player can only be replaced by another Back Court player).
                                      </p>
                                  </>
                              )
                          }
                      ]}/>
        </main>
    );
}
