class Api::NodesController < ApplicationController

  def index
    @nodes = Node.all
  end

  def show
    curr_search = params[:id].downcase
    @nodes = Node.where("path LIKE ? ", "%#{curr_search}%")
  end

  def children
    @nodes = Node.find(params[:id]).children
  end
end
