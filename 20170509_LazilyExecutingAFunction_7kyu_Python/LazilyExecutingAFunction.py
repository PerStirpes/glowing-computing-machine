def make_lazy(f,*args):
    
    def lazied():
        return f(*args)
    return lazied