class Api::NodesController < ApplicationController

  def index
    @nodes = Node.all
  end

  def show
    @node = Node.find(params[:id])
  end

  def children
    @nodes = Node.find(params[:id]).children
  end
end
