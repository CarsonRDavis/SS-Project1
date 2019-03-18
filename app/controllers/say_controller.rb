class SayController < ApplicationController
  before_action :time_now

  def hello
  end

  def goodbye
  end

  def filenames
      @files = Dir.glob('*')
  end

  private

  def time_now
      @time = Time.now
  end
end