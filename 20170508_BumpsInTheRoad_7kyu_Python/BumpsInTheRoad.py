def bumps(road):
    if list(road).count("n") > 15: return "Car Dead"
    return "Woohoo!"

# best practice

# def bumps(road):
#     return "Woohoo!" if road.count("n") <= 15 else "Car Dead"