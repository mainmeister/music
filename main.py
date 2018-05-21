import os
import cherrypy

class Music(object):
    def index(self):
        return open("index.html","r").read()
    index.exposed = True

if __name__ == "__main__":
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        }
    }
    cherrypy.quickstart(Music(),'',conf)