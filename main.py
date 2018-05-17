import cherrypy
import fileinput

class Music(object):
    def index(self):
        return open("index.html","r").read()
    index.exposed = True

if __name__ == "__main__":
    cherrypy.quickstart(Music())