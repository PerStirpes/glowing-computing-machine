def song_decoder(song):
    return ' '.join(song.replace("WUB"," ").split()).strip()

# same as the best practices solution, although you don't need the strip() because of the split().