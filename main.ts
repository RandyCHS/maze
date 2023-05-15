/**
 * Hmmm, I wouldn't recommend changing any of these values though...
 */
player.onChat("2", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("3", function () {
	
})
loops.forever(function () {
    if (!(agent.detect(AgentDetection.Block, LEFT))) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    }
    if (agent.detect(AgentDetection.Block, LEFT) && !(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    if (agent.detect(AgentDetection.Block, LEFT) && (agent.detect(AgentDetection.Block, FORWARD) && !(agent.detect(AgentDetection.Block, RIGHT)))) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
    }
    if (agent.detect(AgentDetection.Block, LEFT) && (agent.detect(AgentDetection.Block, FORWARD) && agent.detect(AgentDetection.Block, RIGHT))) {
        for (let index = 0; index < 2; index++) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
