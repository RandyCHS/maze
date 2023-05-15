"""

Hmmm, I wouldn't recommend changing any of these values though...

"""

def on_on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("2", on_on_chat)

def on_forever():
    pass
loops.forever(on_forever)

def on_on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_on_chat2)
