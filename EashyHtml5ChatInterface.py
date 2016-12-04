import tkinter
import matplotlib
matplotlib.use("TkAgg")
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg, NavigationToolbar2TkAgg
from matplotlib.figure import Figure
class EasyHtml5ChatInterface():
    def __init__(self):
        self.Interface = tkinter.Tk()
        